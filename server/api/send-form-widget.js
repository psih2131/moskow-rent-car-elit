export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const token = '8561855674:AAEmPlTEMZqV3IhRvKJjaE-b03NCp3xRvqk'
    const chatId = '-4815749107'

    const text = `
    📨 Новая заявка с сайта:

    Дата брони: ${body.date}
    Телефон: ${body.phone}

    url страницы заявки: ${body.currentUrl}
    Где была нажата кнопка: ${body.currentPlase}
  `.trim()

    const res = await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        body: {
            chat_id: chatId,
            text,
        },
    })

    return res
})