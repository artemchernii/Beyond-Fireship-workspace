const bootstrap = () => {
    console.log('Load', performance.now());
};

window.addEventListener('load', bootstrap);

setTimeout(() => {
    console.log('async');
}, 1000);
