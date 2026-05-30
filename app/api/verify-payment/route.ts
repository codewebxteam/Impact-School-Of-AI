import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const paymentId = searchParams.get('payment_id');

  if (!paymentId) {
    return NextResponse.json({ success: false, message: 'Payment ID missing' }, { status: 400 });
  }

  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Razorpay keys are missing in .env");
      return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
    }

    // Razorpay ke server se cross-check karna
    const response = await fetch(`https://api.razorpay.com/v1/payments/${paymentId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(keyId + ':' + keySecret).toString('base64')
      }
    });

    const data = await response.json();

    // 'captured' ka matlab payment successful ho gayi aur paise aa gaye
    if (data.status === 'captured' || data.status === 'authorized') {
      return NextResponse.json({ success: true, data });
    } else {
      return NextResponse.json({ success: false, status: data.status });
    }
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}