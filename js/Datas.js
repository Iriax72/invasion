export class Datas {
    // user
    static isUserMobile = navigator.userAgentData ?
    navigator.userAgentData.mobile :
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // settings
    static playerSpawn = {
        x: window.innerWidth / 2,
        y: window.innerHeight - 120
    };
}