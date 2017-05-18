function printSquare (total) {
  for (var a = 0; a < total; a++) {
    for (var b = 0; b < total; b++) {
      process.stdout.write('*');
    }
    process.stdout.write("\n");
  }
}


printSquare(5);
