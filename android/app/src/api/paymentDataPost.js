import firestore from '@react-native-firebase/firestore';

export const paymentDataPost = async paymentData => {
  try {
    const response = await firestore().collection('payments').add(paymentData);
    console.log('Payment data added to Firestore:', response);
    return response;
  } catch (error) {
    console.error('Error adding payment data to Firestore:', error);
    throw error;
  }
};

//
export const itemDataPost = async itemData => {
  try {
    const response = await firestore().collection('itemsData').add(itemData);
    console.log('Payment data added to Firestore:', response);
    return response;
  } catch (error) {
    console.error('Error adding payment data to Firestore:', error);
    throw error;
  }
};
