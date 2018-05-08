import { FarmerDetails } from './farmerDetails.model';

export const MOCKFARMER: FarmerDetails = {
    id: 'KKDFARM1000',
    mobileNo: '1234567890',
    password: 'qwerty',
    cities: ['karnal', 'panipat', 'sonipat'],
    currentAddress: null,
    status: 'active',
    autoconfirm: false,
    aadhaarData: {
        aadhaarNo: '333322221111',
        mobileNumber: '9876543210',
        firstName: 'rahul',
        lastName: 'mehta',
        dateOfBirth: 'Date',
        gender: 'male',
        fatherName: 'rakesh',
        photourl: 'string',
        permanentAddress: {
            addressLine: 'grain market',
            pincode: 123456,
            city: 'kaithal',
            district: 'kaithal',
            state: 'haryana',
            primary: false
        }
    },
    role: 'farmer'
};

export const MOCKFARMERNEGATIVE: FarmerDetails = {
    id: 'KKDFARM1008',
    mobileNo: '1234567890',
    password: 'qwerty',
    cities: ['karnal', 'panipat', 'sonipat'],
    currentAddress: null,
    status: 'active',
    autoconfirm: false,
    aadhaarData: {
        aadhaarNo: '333322221111',
        mobileNumber: '9876543210',
        firstName: 'rahul',
        lastName: 'mehta',
        dateOfBirth: 'Date',
        gender: 'male',
        fatherName: 'rakesh',
        photourl: 'string',
        permanentAddress: {
            addressLine: 'grain market',
            pincode: 123456,
            city: 'kaithal',
            district: 'kaithal',
            state: 'haryana',
            primary: false
        }
    },
    role: 'farmer'
};

export const MOCKFARMERADDRESS = {
    addressLine: 'subhash nagar',
    pincode: 123456,
    city: 'durg',
    district: 'durg',
    state: 'haryana'
};

export const MOCKFARMERDELETE = {
    id: 'KKDFARM1000',
    password: 'qwerty'
}

export const MOCKFARMERPASSWORD = {
    id: 'KKDFARM1000',
    currentPassword: 'qwerty',
    newPassword: 'anu@123'
}

export const MOCKFARMERPRODUCT = {
    productId: 'KKDPROD3061',
    kkdFarmId: 'KKDFARM1000',
    imageUrl: 'http://www.alansfruitandveg.co.uk/wp-content/uploads/2016/11/garlic.jpg',
    productName: 'Garlic',
    description: 'fresh from farm.',
    price: '60',
    bulkOrderPrice: '9.5',
    quantity: '35',
    available: 'true',
    cities: [
        'kota',
        'gurgaon'
    ]
}

export const MOCKFARMERPRODUCTNEGATIVE = {
    productId: 'KKDPROD3061',
    kkdFarmId: 'KKDFARM1000',
    imageUrl: 'http://www.alansfruitandveg.co.uk/wp-content/uploads/2016/11/garlic.jpg',
    productName: 'Garlic',
    description: 'fresh from farm.',
    price: '608',
    bulkOrderPrice: '9.5',
    quantity: '357',
    available: 'false',
    cities: [
        'kota',
        'gurgaon'
    ]
}