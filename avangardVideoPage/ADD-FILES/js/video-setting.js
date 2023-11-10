const player = videojs('video-player', {
    fluid: true,
    fill: true,
    handleMouseDown: () => {
        console.log('zxc')
    },
    plugins: {
        hotkeys: {
            volumeStep: 0.1,
            seekStep: 5,
            enableFull: true,
            enableMute: true,
            enableVolumeScroll: true,
        },
    },
});


