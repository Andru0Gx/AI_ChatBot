import forge from 'node-forge';

export const historyid = (user: string, bot: string, date: string) => {
    const salt = forge.random.getBytesSync(16);
    const md1 = forge.md.sha256.create();
    md1.update(user + bot + date + salt);
    const hash1 = md1.digest().toHex();

    const md2 = forge.md.sha512.create();
    md2.update(user + bot + date + salt);
    const hash2 = md2.digest().toHex();

    return hash1 + hash2;
};

// esto lo que hace es que crea un id para el historial de la conversacion
// utilizando el usuario, el bot, la fecha de la conversacion y un salt aleatorio
// y concatenando los hashes generados con SHA-256 y SHA-512