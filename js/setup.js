function generateBoundaries() {
  const map = [
    ["1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "2"],
    ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
    ["|", ".", "b", ".", "[", "7", "]", ".", "b", ".", "|"],
    ["|", ".", ".", ".", ".", "_", ".", ".", ".", ".", "|"],
    ["|", ".", "[", "]", ".", ".", ".", "[", "]", ".", "|"],
    ["|", ".", ".", ".", ".", "^", ".", ".", ".", ".", "|"],
    ["|", ".", "b", ".", "[", "+", "]", ".", "b", ".", "|"],
    ["|", ".", ".", ".", ".", "_", ".", ".", ".", ".", "|"],
    ["|", ".", "[", "]", ".", ".", ".", "[", "]", ".", "|"],
    ["|", ".", ".", ".", ".", "^", ".", ".", ".", ".", "|"],
    ["|", ".", "b", ".", "[", "5", "]", ".", "b", ".", "|"],
    ["|", ".", ".", ".", ".", ".", ".", ".", ".", "p", "|"],
    ["4", "-", "-", "-", "-", "-", "-", "-", "-", "-", "3"],
  ];

  const boundaries = [];

  map.forEach((row, indexY) => {
    row.forEach((symbol, indexX) => {
      switch (symbol) {
        case "-":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/pipeHorizontal.png"),
            })
          );
          break;
        case "|":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/pipeVertical.png"),
            })
          );
          break;
        case "1":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/pipeCorner1.png"),
            })
          );
          break;
        case "2":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/pipeCorner2.png"),
            })
          );
          break;
        case "3":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/pipeCorner3.png"),
            })
          );
          break;
        case "4":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/pipeCorner4.png"),
            })
          );
          break;
        case "b":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/block.png"),
            })
          );
          break;
        case "[":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/capLeft.png"),
            })
          );
          break;
        case "]":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/capRight.png"),
            })
          );
          break;
        case "_":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/capBottom.png"),
            })
          );
          break;
        case "^":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/capTop.png"),
            })
          );
          break;
        case "+":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/pipeCross.png"),
            })
          );
          break;
        case "5":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/pipeConnectorTop.png"),
            })
          );
          break;
        case "6":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/pipeConnectorRight.png"),
            })
          );
          break;
        case "7":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/pipeConnectorBottom.png"),
            })
          );
          break;
        case "8":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * indexX,
                y: Boundary.height * indexY,
              },
              image: creatImage("img/pipeConnectorLeft.png"),
            })
          );
          break;
        case ".":
          pellets.push(
            new Pellet({
              position: {
                x: indexX * Boundary.width + Boundary.width / 2,
                y: indexY * Boundary.height + Boundary.height / 2,
              },
            })
          );
          break;
        case "p":
          powerUps.push(
            new PowerUp({
              position: {
                x: indexX * Boundary.width + Boundary.width / 2,
                y: indexY * Boundary.height + Boundary.height / 2,
              },
            })
          );
          break;
      }
    });
  });
  return boundaries;
}
