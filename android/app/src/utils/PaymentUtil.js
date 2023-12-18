// PaymentUtil.js
import { Alert } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { paymentDataPost } from '../api/paymentDataPost';

const handleBuyNow = async (item) => {
  try {
    const user = auth().currentUser;
    const options = {
      description: 'Payment for ' + item.title,
      image: item.image,
      currency: 'INR',
      key: 'rzp_test_PMAXD9CgDWklyL',
      amount: item.price * 100,
      name: 'AENBAZAR',
      prefill: {
        email: user.email,
        contact: '1234567891',
        name: 'Akash',
      },
      theme: { color: '#F37254' },
    };

    const data = await RazorpayCheckout.open(options);
    Alert.alert('Payment Success:');

    // Handle the success response, update your state or trigger further actions
    await paymentDataPost(options);
    Alert.alert('Payment Success:', 'Payment data added to Firestore');
    const navigation = useNavigation();
    navigation.navigate('Account');
  } catch (error) {
    Alert.alert('Payment Error:', error);
  }
};

export { handleBuyNow };
