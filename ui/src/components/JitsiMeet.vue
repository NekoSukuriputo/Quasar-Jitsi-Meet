<template>
    <div ref="jitsiContainer" style="height: 100%; width: 100%"></div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
export default {
    props: {
        domain: {
            type: String,
            default: 'meet.jit.si'
        },
        options: {
            type: Object,
            default: () => ({}),
            required: true
        },
    },
    setup(props) {

        const jitsiContainer = ref(null)

        let jitsiApi = ref(null)

        const loadScript = (src, cb) => {
            const scriptEl = document.createElement('script');
            scriptEl.src = src;
            scriptEl.async = 1;
            document.querySelector('head').appendChild(scriptEl);
            scriptEl.addEventListener('load', cb);
        }
        const embedJitsiWidget = () => {
            const options = {
                ...props.options,
                parentNode: jitsiContainer.value,
            };
            jitsiApi.value = new window.JitsiMeetExternalAPI(props.domain, options);
        }
        const executeCommand = (command, ...value) => {
            jitsiApi.value.executeCommand(command, ...value);
        }
        const addEventListener = (event, fn) => {
            jitsiApi.value.on(event, fn);
        }
        // Misc
        const removeJitsiWidget = () => {
            if (jitsiApi.value) jitsiApi.value.dispose();
        }

        onMounted(() => {
            loadScript('https://meet.jit.si/external_api.js', () => {
                if (!window.JitsiMeetExternalAPI) throw new Error('Jitsi Meet API not loaded');
                embedJitsiWidget();
            });
        })

        onBeforeUnmount(() => {
            removeJitsiWidget();
        })

        return {
            jitsiApi,
            jitsiContainer,
            loadScript,
            embedJitsiWidget,
            executeCommand,
            addEventListener,
            removeJitsiWidget,
        }
    }
};
</script>
