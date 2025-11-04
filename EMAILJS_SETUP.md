# EmailJS Setup Guide

The contact form uses EmailJS to send emails from your static website. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## Step 2: Add Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup wizard
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

4. Save and copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxxxxxxxxx`)

## Step 5: Update ContactForm.jsx

Open `src/components/ContactForm.jsx` and replace these values:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Alternative: Formspree

If you prefer not to use EmailJS, you can use Formspree instead:

1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a form endpoint
3. Update the form action in `ContactForm.jsx`:

```javascript
// Replace the EmailJS code with:
const formAction = 'https://formspree.io/f/YOUR_FORM_ID';

// Then in the form element:
<form action={formAction} method="POST" ...>
```

## Testing

After setup, test the form:
1. Fill out the contact form
2. Submit it
3. Check your email inbox for the message

The form will work even without EmailJS configured (it will just log to console), but emails won't be sent until you complete the setup.

