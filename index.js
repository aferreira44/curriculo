var markdownpdf = require("markdown-pdf"),
    fs = require("fs")

markdownpdf().from("./README.md").to("./curriculo.pdf", function() {
    console.log("Converted to PDF successfully!")
})