let handler = m => m;

export async function all(m) {
    let user = global.db.data.users[m.sender];
    
    if (!user || m.chat.endsWith('broadcast')) return;

    // Aquí puedes agregar cualquier lógica que necesites
    // sin referencia al sistema premium.
}
