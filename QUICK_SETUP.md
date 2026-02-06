# 🚀 QUICK SETUP GUIDE

## What You Have

Your Valentine's proposal page is ready with 4 files:

```
valentine/
├── index.html          (Main page)
├── styles.css          (Beautiful styling)
├── script.js           (Interactive buttons & login)
├── send_email.php      (Email sender)
└── README.md           (Full documentation)
```

## Step 1: Update Email Configuration ⚙️

Open `send_email.php` and find these lines (around line 23-25):

```php
$recipientEmail = 'vhianca@example.com';     // CHANGE TO HER EMAIL
$senderEmail = 'your_email@gmail.com';       // CHANGE TO YOUR EMAIL
$senderName = 'Your Name';                    // CHANGE TO YOUR NAME
```

Replace with your actual information!

## Step 2: Update Valentine's Date Details 📅

In the same file, find lines 28-32:

```php
$valentineDate = 'February 14, 2026';
$valentineTime = '6:00 PM';
$valentineLocation = '[Your Restaurant or Place Name]';
$valentineAddress = '[Complete Address, City, State]';
$valentinePhone = '[Contact Number]';
```

Replace with your actual Valentine's date plans!

## Step 3: Add Your Photos 📸

In `index.html`, find the gallery section (search for `gallery-container`).

Replace the placeholder divs with your actual images:

```html
<div class="gallery-item">
    <img src="images/photo1.jpg" alt="Us" style="width:100%; height:100%; object-fit:cover;">
</div>
```

Create an `images/` folder and add your cute couple photos!

## Step 4: Test the Page 🧪

1. **Start XAMPP**
   - Open XAMPP Control Panel
   - Start Apache

2. **Navigate to the page**
   - Open browser
   - Go to: `http://localhost/valentine/`

3. **Login with**
   - Username: `Vhianca Yzavel D. Vicente`
   - Password: `092118`

4. **Test the buttons**
   - Click YES → Should show success message
   - Email should be sent (check spam folder)

## Step 5: Email Setup (Important!) 💌

### If using Gmail:

1. Go to `myaccount.google.com/apppasswords`
2. Generate an App Password for Gmail
3. Update `send_email.php` line 20 to use SMTP:

```php
// ALTERNATIVE: Using Gmail SMTP (more reliable)
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';

$mail = new PHPMailer\PHPMailer\PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'your_email@gmail.com';
$mail->Password = 'your_app_password';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->setFrom('your_email@gmail.com', 'Your Name');
$mail->addAddress('vhianca@example.com');
$mail->isHTML(true);
$mail->Subject = '💕 Will You Be My Valentine? 💕';
$mail->Body = $htmlContent;
$mail->send();
```

### If using other email providers:

Check XAMPP documentation for mail configuration.

## Step 6: Final Checks ✅

- [ ] Email addresses are correct
- [ ] Date and location are updated
- [ ] Photos are added
- [ ] XAMPP is running
- [ ] No error messages on login/click
- [ ] Test email is received

## 🎮 Fun Facts

- **Easter Egg**: Type ↑↑↓↓←→←→BA (Konami code) for matrix effect
- **NO Button**: Gets harder to click - YES button grows!
- **Max Attempts**: 5 wrong logins lock the system
- **Responsive**: Works on mobile and desktop

## ❓ Common Issues

**"Email not sending?"**
- Check if XAMPP mail is configured
- Check spam folder
- Make sure email addresses are correct
- Check XAMPP error logs

**"Photos not showing?"**
- Make sure path is correct
- Try absolute path instead of relative
- Check file permissions

**"Password not working?"**
- Password is case-sensitive: `092118`
- Username is case-insensitive
- 6 digits exactly

**"Login stuck?"**
- Refresh page (Ctrl+F5)
- Check browser console (F12)
- Clear browser cache

## 💝 Pro Tips

1. **Test first**: Do a test run before showing her
2. **Backup the email**: Keep the HTML email for keepsake
3. **Screenshot**: Take a screenshot when she says YES
4. **Social media**: Share the page (after approval!)
5. **Print version**: Can also print as PDF

---

Good luck with your proposal! She's going to love it! 💕💻

Need help? Check the full README.md file!
