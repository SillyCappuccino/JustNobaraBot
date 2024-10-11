let handler = m => m;

export async function all(m) {
    let user = global.db.data.users[m.sender]
    if (!user || m.chat.endsWith('broadcast')) return;
    if (user.premiumTime != 0 && user.premium) {
        await m.reply(`${lenguajeGB['smsAvisoAG']()}*@${m.sender.split`@`[0]}* ${lenguajeGB['smsPremI']()}`, false, { mentions: [m.sender] })
        user.premiumTime = 0
        user.premium = false

    // Aquí puedes agregar cualquier lógica que necesites
    // sin referencia al sistema premium.
}}}
