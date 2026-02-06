# 💕 IT Valentine's Proposal Page 💕

A romantic IT-themed Valentine's Day proposal page with login authentication, cute photo gallery, and interactive response buttons.

## ✨ Features

✅ **Login System**
- Username: Full name (Vhianca Yzavel D. Vicente)
- Password: 6-digit anniversary date (092118)
- Matrix-style terminal interface
- Failed attempt tracking (max 5 attempts)

✅ **Proposal Screen**
- Personalized greeting with her name
- Photo gallery section (add your cute pictures together)
- Romantic code-themed message
- "Will you be my Valentine?" question with styling

✅ **Interactive Buttons**
- **YES Button**: Sends her a Valentine's invitation email with date details
- **NO Button**: Moves away and YES button grows (funny Easter egg)
- Celebration effects with floating hearts

✅ **Email Integration**
- Sends formal invitation email when she clicks YES
- Includes date, time, and location details
- Beautiful HTML email template

✅ **Easter Egg**
- Konami code activated (↑↑↓↓←→←→BA)
- Matrix rain effect with hearts and emojis

## 📋 Setup Instructions

### 1. **Update Email Settings**

Open `send_email.php` and update these lines with your actual email:

```php
$recipientEmail = 'vhianca@example.com';  // Her email address
$senderEmail = 'your_email@gmail.com';     // Your email
$senderName = 'Your Name';                  // Your name
```

### 2. **Configure Date & Location Details**

In `send_email.php`, update the email content with your Valentine's date details:

```html
<p><strong>Date:</strong> February 14, 2026 (Valentine's Day)</p>
<p><strong>Time:</strong> 6:00 PM</p>
<p><strong>Location:</strong> [Your Restaurant/Place Name]</p>
<p><strong>Address:</strong> [Complete Address]</p>
```

### 3. **Add Your Photos**

Replace the placeholder image boxes with your actual photos:

In `index.html`, replace the image placeholders in the gallery section:

```html
<div class="gallery-item">
    <img src="path/to/your/photo.jpg" alt="Photo" style="width:100%; height:100%; object-fit:cover;">
</div>
```

Place your images in the `valentine/images/` folder.

### 4. **Test the Page**

1. Start XAMPP (Apache + MySQL)
2. Navigate to: `http://localhost/valentine/`
3. Login with:
   - Username: `Vhianca Yzavel D. Vicente`
   - Password: `092118`

### 5. **Email Configuration** (Important!)

For emails to work, you need to configure PHP's mail settings:

**Option A: Using Gmail SMTP (Recommended)**

1. Create a Gmail account or use an existing one
2. Enable 2-Factor Authentication
3. Generate an App Password for Gmail
4. Update `send_email.php` to use SMTP:

```php
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your_email@gmail.com';
    $mail->Password = 'your_app_password';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('your_email@gmail.com', 'Your Name');
    $mail->addAddress('vhianca@example.com', 'Vhianca');
    $mail->isHTML(true);
    $mail->Subject = '💕 Will You Be My Valentine? 💕';
    $mail->Body = $htmlContent;

    $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
```

**Option B: Using XAMPP's Mail Settings**

Edit `php.ini` in XAMPP and configure SMTP settings for your email provider.

## 🎮 How It Works

1. **Login Screen** → She enters her name and anniversary date
2. **Proposal Screen** → Beautiful message with photo gallery
3. **Answer Buttons** → 
   - Click YES: Email sent, celebration animation
   - Click NO: Button moves away, YES grows bigger (funny!)
4. **Success** → Shows confirmation message

## 🎨 Customization

### Change Colors
Edit `styles.css`:
- Primary color: `#ff1493` (Deep Pink)
- Secondary color: `#00ff88` (Neon Green)
- Background: Modify gradient colors in `body { background: ... }`

### Change Message
Edit the message in `index.html` under `.love-message` section

### Change Button Text
Edit `index.html`:
```html
<button id="yesBtn" class="btn btn-yes">YES! 💕</button>
<button id="noBtn" class="btn btn-no">NO</button>
```

## 🔒 Password Information

- **Username**: Vhianca Yzavel D. Vicente (case-insensitive)
- **Password**: 092118 (your anniversary - 09/21/18)
- **Max Attempts**: 5 before system locks

## 📞 Troubleshooting

**Email not sending?**
- Check that PHP is configured with mail() or SMTP
- Verify email addresses are correct
- Check PHP error logs in XAMPP

**Photos not showing?**
- Make sure image paths are correct
- Check file permissions
- Use absolute paths or relative paths from index.html

**Buttons not working?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)
- Ensure JavaScript is enabled

## 💡 Pro Tips

1. **Print the page** as PDF to keep a memory
2. **Take a screenshot** when she says YES
3. **Save the email** she receives as a keepsake
4. **Add custom music** by embedding an audio player
5. **Use this page** as your Valentine's announcement on social media

## 🎉 Have Fun!

This page is designed to make your proposal special and memorable. Good luck! 💕

---

Made with ❤️ in code | Happy Valentine's Day! 💻💝
