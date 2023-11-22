// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
document.addEventListener("mousemove", (event) => {

    var sidebarVisiblePercentage = (event.clientX / window.innerWidth) * 100;

    if (sidebarVisiblePercentage < 10) {
        document.getElementById("sidebar").style.left = "0";
        document.getElementById("content").style.marginLeft = "250px";
    }
    else if (sidebarVisiblePercentage > 20) {
                document.getElementById("sidebar").style.left = "-250px";
        document.getElementById("content").style.marginLeft = "0";
    }
})
//     } else {
//         document.getElementById("sidebar").style.left = "-250px";
//         document.getElementById("content").style.marginLeft = "0";
//     }
// });