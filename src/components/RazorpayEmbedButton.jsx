import React, { useEffect } from 'react';

const RazorpayEmbedButton = ({ reloadKey }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_Qi6laTPmaSqHa7");
    script.async = true;

    const form = document.getElementById(`razorpay-form-${reloadKey}`);
    form.innerHTML = "";
    form.appendChild(script);
  }, [reloadKey]);

  return (
    <form id={`razorpay-form-${reloadKey}`} className="w-full" />
  );
};

export default RazorpayEmbedButton;
