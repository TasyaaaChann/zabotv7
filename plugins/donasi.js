let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel []
╰────

╭─「 Donasi • Pulsa 」
│ • Axis [083830815715]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
