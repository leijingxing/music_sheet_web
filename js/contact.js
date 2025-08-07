document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS for this page
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get form values
            const name = document.getElementById('name').value;
            const contactInfo = document.getElementById('contactInfo').value;
            const message = document.getElementById('message').value;

            // Recipient email address
            const recipientEmail = '1276753397@qq.com';

            // Subject of the email
            const subject = `来自 旋律精灵网站 的新消息 - ${name}`;

            // Body of the email
            const body = `
您收到一条来自“旋律精灵”官网的新消息:
--------------------------------------------------
发送人姓名: ${name}
联系方式 (邮箱/电话): ${contactInfo}
--------------------------------------------------

消息内容:
${message}
            `;

            // Construct the mailto link
            const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open the user's default email client
            window.location.href = mailtoLink;
        });
    }
});
