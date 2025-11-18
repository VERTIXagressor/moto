
const payButton = document.getElementById('fake-pay-button');


payButton.addEventListener('click', () => {
    
    const paymentWindow = window.open('', '_blank', 'width=600,height=400');
    
   
    if (!paymentWindow) {
        alert('Будь-ласка, дозвольте спливаючі вікна в браузері.');
        return;
    }

    
    paymentWindow.document.write(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <title>Оплата</title>
            <style>
                body { font-family: Arial, sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f4f4f9; }
                .loader { border: 8px solid #f3f3f3; border-top: 8px solid #3498db; border-radius: 50%; width: 50px; height: 50px; animation: spin 2s linear infinite; }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                h2 { color: #333; }
                .status-message { margin-top: 20px; font-size: 1.2em; text-align: center; }
            </style>
        </head>
        <body>
            
            <div class="loader"></div>
            <p class="status-message">Обробка платежу...</p>
        </body>
        </html>
    `);

    
    setTimeout(() => {
        
        const isSuccessful = Math.random() > 0.3; 
        const statusMessage = isSuccessful ? 'Оплата пройшла успішно! Ви можете зачинити це вікно.' : 'Помилка оплати. Спробуйте ще раз.';
        const statusColor = isSuccessful ? '#4CAF50' : '#F44336';
        
        
        paymentWindow.document.body.innerHTML = `
            <h2 style="color: ${statusColor};">${statusMessage}</h2>
            <p>Вікно зачиниться автоматично через декілька секунд...</p>
        `;
        
        
        setTimeout(() => {
            paymentWindow.close();
        }, 3000);
    }, 4000); 
});