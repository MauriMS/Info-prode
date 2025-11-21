import { BASE_URL } from "../constantes/constantes";

export const getAllTorneos = async () => {
    const response = await fetch(`${BASE_URL}/torneos`);

    //  tuve que poner esto porque sino me llegaba un string al arreglo de filtros y se rompia
    if (!response.ok) {
        throw new Error(`Error al cargar la api: ${response.statusText} (${response.status})`);
    }

    return response.json();
};