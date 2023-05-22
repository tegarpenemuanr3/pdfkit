const PDFDocument = require("pdfkit");
const fs = require("fs");

function generatePDF() {
  // Buat objek PDFDocument
  const doc = new PDFDocument();

  // Tambahkan konten ke dokumen
  doc
    .fontSize(20)
    .text("Contoh Proyek Menggunakan PDFKit", { align: "center" });
  doc.moveDown();
  doc
    .fontSize(12)
    .text(
      "Ini adalah contoh proyek sederhana menggunakan PDFKit untuk membuat file PDF."
    );
  doc.moveDown();
  doc.image("./knex-logo.png", { width: 100 });

  // Simpan dokumen sebagai file PDF
  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.end();

  console.log("File PDF berhasil dibuat: output.pdf");
}

generatePDF();
