import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../../services/order-service/order.service';
import { IdRoleService } from '../../../../services/id-role/id-role.service';
import { ProductList } from '../../../config/productList';
import swal from 'sweetalert2';

@Component({
  selector: 'app-farmer-current-order',
  templateUrl: './farmer-current-order.component.html',
  styleUrls: ['./farmer-current-order.component.css'],
  providers: [OrderService]
})
export class FarmerCurrentOrderComponent implements OnInit {

  @ViewChild('gmap')gmap;
  map: google.maps.Map;

  constructor(private orderService: OrderService, private idRoleService: IdRoleService) { }

  items = ProductList.products;
  public orderList = [];
  public date: Date;
  public time: Date;
  public orderId: any = "";
  public declineReason: any;
  public otp: any;
  public otpAuto: any;
  public otpVerified: Boolean = false;
  public avgRating: any;
  public farmerId: any;
  public p: any;
  public starList: boolean[] = [true, true, true, true, true];       // create a list which contains status of 5 stars
  public rating: number;
  public  directionsDisplay: any;
  public directionsService:any;
  public geocoder:any;
  public farmerLat:any;
  public farmerLng:any;
  public custLat:any;
  public custLng:any;
  public distance:any;
  WindowRef:any=window;

  ngOnInit() {
    this.loadData();
  }

  //Loading data on initialization
  loadData() {
    let d = new Date();
    //this.date=d.getFullYear()+'-0'+(d.getMonth()+1)+'-'+d.getDate();
    this.date = d;
    //code to get the list of orders according to farmer id
    this.orderService.getCurrentOrderListFromFarmerId(localStorage.getItem("id")).subscribe((res) => {
      this.orderList = res;
    }, (error) => { })
  }

  //updating delivery details of order id
  public setDeliveryDetails() {
    var updateValues = {
      'orderId': this.orderId,
      'expectedTime': this.time,
      'expectedDate': this.date,
      'farmerStatus': "Accept",
    }
    this.orderService.updateDeliveryDetails(updateValues).subscribe((res) => {
      this.loadData();
    }, (error) => { this.loadData(); })
  }

  //setting orderId for particular order
  public setData(orderId) {
    this.orderId = orderId;

  }

  //Checking otp for particular order
  public setDataOtp(orderId, otp) {
    this.orderId = orderId;
    this.otpAuto = otp;
  }

  //setting decline reason in order Details
  public setDeclineReason() {
    var updatedReason = {
      'orderId': this.orderId,
      'orderDeclineReason': this.declineReason,
      'farmerStatus': "Decline",
      'orderStatus': "Cancelled",
      'orderType': "Previous",
    }
    this.orderService.updateDeclineReason(updatedReason).subscribe((res) => {
      this.loadData();
    }, (error) => { this.loadData(); })
  }

  //checking OTP For order delivery
  public checkingOtp(){
    if(this.otpAuto==this.otp){
      this.otpVerified=true;
    }else{
      swal({
				type: 'error',
				title: 'Oops...',
				text: 'Wrong OTP!',
				footer: 'Enter Correct OTP......',
			})
    }
  }

  //Rating the customer
  public rateCustomer() {
    this.otpStatus();
  }

  //Updating the Otp Status
  public otpStatus() {
    var updatedDelivery = {
      'orderId': this.orderId,
      'orderStatus': "Delivered",
      'orderType': "Previous",
      'otpVerified': true,
      'orderReceivingDate': this.date
    }
    this.orderService.updateDeliveryDetails(updatedDelivery).subscribe((res) => {
      this.loadData();
    }, (error) => {
      this.loadData();
    })
  }

  //Create a function which receives the value counting of stars click,
  //and according to that value we do change the value of that star in list.
  setStar(data: any) {
    this.rating = data + 1;
    for (var i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starList[i] = false;
      }
      else {
        this.starList[i] = true;
      }
    }
  }

  track() {
    // var directionsDisplay;
    this.geocoder = new google.maps.Geocoder();
    this.directionsService = new google.maps.DirectionsService();
    // var map;
   
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.geocoder.geocode({'address': localStorage.getItem('user-location')}, (results, status)=> {
          if (status === 'OK') {
            this.farmerLat = results[0].geometry.location.lat();
            this.farmerLng = results[0].geometry.location.lng();
            this.custLat = 28.704059;
            this.custLng = 77.102490;
            //console.log(this.farmerLat +"," +this.farmerLng);
            var center = new google.maps.LatLng(this.farmerLat, this.farmerLng);
        var mapOptions = {
            zoom: 20,
            center: center
        };
        this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
        this.directionsDisplay.setMap(this.map);
        this.calcRoute();
          } else {
            swal({
              type: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
           // console.log('Geocode was not successful for the following reason: ' + status);
          }
        });

        
  }
   calcRoute() {

    var start = new google.maps.LatLng(this.farmerLat, this.farmerLng);
    var end = new google.maps.LatLng(this.custLat, this.custLng);
    
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(start);
    bounds.extend(end);
    this.map.fitBounds(bounds);
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    this.directionsService.route(request,  (response, status) =>{
        if (status == google.maps.DirectionsStatus.OK) {
          if(this.directionsDisplay) {
            this.directionsDisplay.setDirections(response);
            this.directionsDisplay.setMap(this.map);
          }
            
        } else {
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
            //console.log("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
        }
    });
    this.calculateDistance();
}

calculateDistance()
	{
    var start = new google.maps.LatLng(this.farmerLat, this.farmerLng);
    var end = new google.maps.LatLng(this.custLat, this.custLng);
		// 	var miledistance = start.distanceFrom(end, 3959).toFixed(1);
		// 	var kmdistance = (miledistance * 1.609344).toFixed(1);
		// 	document.getElementById('results').innerHTML = 'Address 1: ' + location1.address + ' (' + location1.lat + ':' + location1.lon + ')<br />Address 2: ' + location2.address + ' (' + location2.lat + ':' + location2.lon + ')<br />Distance: ' + miledistance + ' miles (or ' + kmdistance + ' kilometers)<br/>';
    this.distance = (google.maps.geometry.spherical.computeDistanceBetween (start, end)/ 1000);
    this.WindowRef.p = Math.ceil(this.distance);
  }
 }

