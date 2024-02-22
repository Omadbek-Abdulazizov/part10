document.getElementById("downloadButton").addEventListener("click", function() {
    var fileUrl = "https://drive.google.com/u/0/uc?id=1yfTovbWsE5bF57JVbUsgMkyqeGdKz0Y3&export=download"; // Faylingizning URL manzilini bu yerga yozing
    var fileName = "yuklab ol"; // Yuklanayotgan faylning nomini bu yerga yozing

    var a = document.createElement("a");
    a.href = "https://drive.google.com/u/0/uc?id=1yfTovbWsE5bF57JVbUsgMkyqeGdKz0Y3&export=download";
    a.download = 'yuklab ol';
    a.click();
});