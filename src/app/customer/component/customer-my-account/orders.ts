export class Orders{
    kkdFarmId: string;
      productId:string;
      kkdCustId: string;
      name:string;
      address: {
        pincode: any,
        addressLine: string,
        city: string,
        district: string,
        state: string
      };
      avgRating: any;
      orderId: string;
      quantity: any;
      farmerStatus: any;
      expectedTime: any;
      expectedDate: any;
      mobileNo: any;
      transactionId: any;
      totalAmount: any;
      orderType:any;
      orderStatus: any;
      otp: any;
      otpVerified: any;
      orderPlacingDate: any;
      orderReceivingDate: any;
      validityOfOrder: any;
      orderDeclineReason: any;
}