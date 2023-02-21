// // A Checkout page which shows the total and asks for shipping and payment information (when you click on the "Checkout" button on the Cart page it navigates to the checkout page)
// The first name input needs to have the HTML attribute data-test-id="checkout-first-name"
// The last name input needs to have the HTML attribute data-test-id="checkout-last-name"
// The email input needs to have the HTML attribute data-test-id="checkout-email"
// The address input needs to have the HTML attribute data-test-id="checkout-address"
// The city input needs to have the HTML attribute data-test-id="checkout-city"
// The postal code input needs to have the HTML attribute data-test-id="checkout-postal-code"
// The country input needs to have the HTML attribute data-test-id="checkout-country"
// The credit card input needs to have the HTML attribute data-test-id="checkout-credit-card"
// The expiration date input needs to have the HTML attribute data-test-id="checkout-expiration-date"
// The security code input needs to have the HTML attribute data-test-id="checkout-security-code"
// The form should prevent submission with any of the above fields being empty
// The Confirm Order button needs to have the HTML attribute data-test-id="checkout-confirm-order"
// Privacy: don't save user information (payment or other personal information) anywhere (unless you have a privacy policy and are creating a real ecommerce store)

export default function CheckoutPage() {
  return (
    <form action="/" method="post">
      <label htmlFor="first">First name:</label>
      <input
        id="first"
        name="first"
        required
        data-test-id="checkout-first-name"
      />
      <label htmlFor="last">Last name:</label>
      <input id="last" name="last" required data-test-id="checkout-last-name" />
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" required data-test-id="checkout-email" />
      <label htmlFor="address">Address:</label>
      <input
        id="address"
        name="address"
        required
        data-test-id="checkout-address"
      />
      <label htmlFor="city">City:</label>
      <input id="city" name="city" required data-test-id="checkout-city" />
      <label htmlFor="postal-code">Postal Code:</label>
      <input
        id="postal-code"
        name="postal-code"
        required
        data-test-id="checkout-postal-code"
      />
      <label htmlFor="country">Country:</label>
      <input
        id="country"
        name="country"
        required
        data-test-id="checkout-country"
      />
      <label htmlFor="creditcard">Creditcard:</label>
      <input
        id="creditcard"
        name="creditcard"
        required
        data-test-id="checkout-credit-card"
      />
      <label htmlFor="expiration-date">Expiration Date:</label>
      <input
        id="expiration-date"
        name="expiration-date"
        required
        data-test-id="checkout-expiration-date"
      />
      <label htmlFor="security-code">Security Code:</label>
      <input
        id="security-code"
        name="security-code"
        required
        data-test-id="checkout-security-code"
      />

      <button data-test-id="checkout-confirm-order">Confirm Order</button>
    </form>
  );
}
