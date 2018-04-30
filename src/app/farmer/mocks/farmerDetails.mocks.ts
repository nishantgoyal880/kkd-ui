import { FarmerDetails } from './farmerDetails.model';

export const mockFarmer:FarmerDetails={
    id:'KKDFARM1000',
    mobileNo:'1234567890',
    password:'qwerty',
    cities:['karnal','panipat','sonipat'],
    currentAddress:{
        addressLine:'subhash nagar',
        pincode:123456,
        city:'durg',
        district:'durg',
        state:'haryana'
    },
    status:'active',
    autoconfirm:false,
    aadhaarData:{
        aadhaarNo:'333322221111',
        mobileNumber:'9876543210',
        firstName:'rahul',
        lastName:'mehta',
        dateOfBirth:'Date',
        gender:'male',
        fatherName:'rakesh',
        photourl:'string',
        permanentAddress:{
            addressLine:'grain market',
        pincode:123456,
        city:'kaithal',
        district:'kaithal',
        state:'haryana',
        primary:false
        }
    },
    role:'farmer'
};
