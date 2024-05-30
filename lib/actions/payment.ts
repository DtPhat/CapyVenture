
import { BASE_URL } from "../constants";
import { SubscriptionPlan } from "../definitions"
export const subscribePremium = async (subscriptionPlans: SubscriptionPlan) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/payment/create_payment/${subscriptionPlans}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      // redirect: 'follow' // This tells fetch to follow redirects
    })
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}