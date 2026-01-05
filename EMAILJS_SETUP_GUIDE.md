# EmailJS Setup Guide for Contact Form

## Current Status
✅ EmailJS package installed (`@emailjs/browser`)
✅ Environment variables configured in `.env.local`
✅ Contact form code implemented
❌ EmailJS template needs proper configuration

## Error Encountered
The contact form is returning a 400 error, which typically means the EmailJS template parameters don't match or the template isn't properly configured.

## Step-by-Step Setup Instructions

### 1. Verify Your EmailJS Account
Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)

### 2. Check Your Service
1. Go to **Email Services** in the dashboard
2. Verify service ID: `service_j75c6f8` exists and is active
3. Make sure it's connected to your email account (Gmail, Outlook, etc.)

### 3. Configure Your Email Template
1. Go to **Email Templates** in the dashboard
2. Find or create template: `template_3gftsqq`
3. **Important**: Use these exact variable names in your template:

```
Subject: New Contact Form Message from {{from_name}}

Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

### 4. Template Settings
- **To Email**: Set to `duolpuot06@gmail.com` or use `{{to_email}}` if you want it dynamic
- **From Name**: Use `{{from_name}}`
- **Reply To**: Use `{{from_email}}` so you can reply directly to the sender

### 5. Verify Public Key
1. Go to **Account** → **General**
2. Copy your Public Key
3. Verify it matches: `XwRcPAFomyQND-Xnt`

### 6. Test the Template
1. In the EmailJS dashboard, use the **Test** button
2. Fill in test values for:
   - from_name
   - from_email
   - message
   - to_email
3. Click **Send Test** to verify it works

## Current Environment Variables
Your `.env.local` file has:
```env
VITE_EMAILJS_SERVICE_ID=service_j75c6f8
VITE_EMAILJS_TEMPLATE_ID=template_3gftsqq 
VITE_EMAILJS_PUBLIC_KEY=XwRcPAFomyQND-Xnt
```

## Template Variables Being Sent
The contact form sends these parameters:
- `from_name`: The sender's name
- `from_email`: The sender's email
- `message`: The message content
- `to_email`: Your email (duolpuot06@gmail.com)

## Common Issues & Solutions

### Issue: 400 Bad Request
**Causes:**
- Template variables don't match
- Service ID, Template ID, or Public Key is incorrect
- EmailJS account isn't verified
- Email service isn't properly connected

**Solution:**
1. Double-check all IDs and keys
2. Verify template variable names match exactly
3. Test the template in EmailJS dashboard first
4. Make sure your email service is active

### Issue: Template Not Found
**Solution:**
- Verify template ID `template_3gftsqq` exists
- Check for typos in the template ID

### Issue: Service Not Found
**Solution:**
- Verify service ID `service_j75c6f8` exists
- Make sure the service is active

## After Configuration
Once you've configured the template correctly:
1. Save all changes in EmailJS dashboard
2. Restart your development server: `npm run dev`
3. Test the form again

## Need More Help?
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)

## Contact Form Features
Your form includes:
✅ Name validation (1-100 characters)
✅ Email validation
✅ Message validation (1-1000 characters)
✅ Loading state during submission
✅ Success/error toast notifications
✅ Form reset after successful submission
✅ Security with environment variables
