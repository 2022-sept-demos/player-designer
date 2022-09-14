/* global domtoimage */
// <script src="https://cdn.jsdelivr.net/npm/dom-to-image@2.6.0/src/dom-to-image.min.js"></script>

export async function downloadElementAsImage(element, name) {
    const dataUrl = await domtoimage.toPng(element);
    const link = document.createElement('a');
    link.download = name + '.png';
    link.href = dataUrl;
    link.click();
}
