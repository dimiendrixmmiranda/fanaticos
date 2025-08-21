export default function handleImagemChange(
    event: React.ChangeEvent<HTMLInputElement>,
    setErroImagemTamanho: (valor: string | null) => void,
    setImages: (valor: File[]) => void
) {
    const files = event.target.files;
    setErroImagemTamanho(null);

    if (!files || files.length === 0) {
        setImages([]);
        return;
    }

    const validFiles: File[] = [];
    const maxSizeMB = 2; // limite por imagem (2MB é seguro p/ uploads)
    const maxSizeInBytes = maxSizeMB * 1024 * 1024;

    Array.from(files).forEach((file) => {
        if (file.size > maxSizeInBytes) {
            setErroImagemTamanho(`A imagem ${file.name} é maior que ${maxSizeMB}MB.`);
        } else {
            validFiles.push(file);
        }
    });

    setImages(validFiles); // guarda os arquivos crus
}