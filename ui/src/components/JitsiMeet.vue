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
            this.jitsiApi = new window.JitsiMeetExternalAPI(props.domain, options);
        }
        const executeCommand = (command, ...value) => {
            this.jitsiApi.executeCommand(command, ...value);
        }
        const addEventListener = (event, fn) => {
            this.jitsiApi.on(event, fn);
        }
        // Misc
        const removeJitsiWidget = () => {
            if (this.jitsiApi) this.jitsiApi.dispose();
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
