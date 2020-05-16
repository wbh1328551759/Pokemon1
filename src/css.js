const string = `
.卡比兽 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .卡比兽 {
    position: relative;
    height: 100vh;
    background: radial-gradient(
        circle at 50% 0,
        rgba(255, 0, 0, 0.5),
        rgba(255, 0, 0, 0) 70.71%
      ),
      radial-gradient(
        circle at 6.7% 75%,
        rgba(0, 0, 255, 0.5),
        rgba(0, 0, 255, 0) 70.71%
      ),
      radial-gradient(
          circle at 93.3% 75%,
          rgba(0, 255, 0, 0.5),
          rgba(0, 255, 0, 0) 70.71%
        )
        beige;
  }
  
  .ear.left {
    position: absolute;
    width: 0;
    height: 0;
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    border-bottom: 20px solid #f2e2b5;
    border-top: none;
    left: 50%;
    margin-left: -65px;
    top: 63px;
    transform: rotate(-15deg);
    z-index: 2;
  }
  .ear.left::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    border-bottom: 20px solid #2e524e;
    border-top: none;
    left: 50%;
    margin-left: -31px;
    margin-top: -26px;
  }
  .ear.right {
    border: 1px solid red;
    position: absolute;
    width: 0;
    height: 0;
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    border-bottom: 20px solid #f2e2b5;
    border-top: none;
    left: 50%;
    margin-left: 5px;
    top: 63px;
    transform: rotate(15deg);
    z-index: 2;
  }
  .ear.right::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    border-bottom: 20px solid #2e524e;
    border-top: none;
    left: 50%;
    margin-left: -31px;
    margin-top: -26px;
  }
  .head {
    height: 90px;
    width: 150px;
    position: absolute;
    top: 75px;
    left: 50%;
    margin-left: -75px;
    border-radius: 45%;
    background: #f2e2b5;
    z-index: 2;
  }
  .headOutline {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 45px;
    border-radius: 50%;
    width: 200px;
    height: 150px;
    background: #2e524e;
    z-index: 1;
  }
  .eye {
    position: relative;
  }
  .eye.left {
    border: 2px solid #2e524e;
    width: 32px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: 30px;
    transform: rotate(-6deg);
  }
  .eye.right {
    position: absolute;
    border: 2px solid #2e524e;
    width: 32px;
    left: 50%;
    margin-left: 18px;
    transform: rotate(6deg);
    top: 30px;
    z-index: 2;
  }
  .mouth {
    border-bottom: 3px solid #2e524e;
    border-radius: 20%;
    width: 90px;
    height: 20px;
    position: absolute;
    left: 50%;
    margin-left: -45px;
    top: 45px;
  }
  .body {
    position: absolute;
    border: 2px solid black;
    border-radius: 500px / 400px;
    width: 300px;
    height: 210px;
    left: 50%;
    margin-left: -150px;
    top: 155px;
    background: #2e524e;
    z-index: 3;
    animation: bigBody 2000ms infinite alternate;
  }
  .body::before {
    content: "";
    display: block;
    width: 210px;
    height: 160px;
    position: absolute;
    left: 50%;
    margin-left: -105px;
    top: 15px;
    border-radius: 50%;
    background: #f2e2b5;
  }
  .bodyYuan {
    width: 140px;
    height: 50px;
    border-radius: 50%;
    z-index: 33;
    background: #2e524e;
    position: absolute;
    left: 50%;
    margin-left: -70px;
    top: 305px;
    z-index: 3;
  }
  .foot > .footLeft {
    border: 2px solid black;
    border-radius: 50%;
    width: 120px;
    height: 100px;
    position: absolute;
    left: 50%;
    margin-left: -145px;
    top: 315px;
    z-index: 3;
    background: #f2e2b5;
    transform: rotate(25deg);
  }
  .foot > .footLeft::before {
    content: "";
    display: block;
    border-radius: 50%;
    width: 60px;
    height: 50px;
    background: #9e5526;
    position: absolute;
    margin-left: 45px;
    margin-top: 30px;
  }
  .foot > .footRight {
    border: 2px solid black;
    border-radius: 50%;
    width: 120px;
    height: 100px;
    position: absolute;
    left: 50%;
    margin-left: 25px;
    top: 315px;
    z-index: 3;
    background: #f2e2b5;
    transform: rotate(-25deg);
  }
  .foot > .footRight::before {
    content: "";
    display: block;
    border-radius: 50%;
    width: 60px;
    height: 50px;
    background: #9e5526;
    position: absolute;
    margin-left: 15px;
    margin-top: 30px;
  }
  .hand > .handLeft {
    border: 2px solid black;
    position: absolute;
    left: 50%;
    top: 197px;
    margin-left: -200px;
    border-radius: 180px / 200px;
    width: 150px;
    height: 60px;
    transform: rotate(-30deg);
    background: #2e524e;
  }
  .hand > .handRight {
    border: 2px solid black;
    position: absolute;
    left: 50%;
    top: 197px;
    margin-left: 50px;
    border-radius: 180px / 200px;
    width: 150px;
    height: 60px;
    transform: rotate(30deg);
    background: #2e524e;
  }
  .zzz {
    position: absolute;
    left: 43%;
    top: 10%;
    animation: big 2000ms infinite linear;
  }
  @keyframes big {
    0% {
      transform: translate(200px, 30px) scale(1);
    }
    100% {
      transform: translate(300px, -30px) scale(2);
    }
  }
  @keyframes bigBody {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;
export default string;
