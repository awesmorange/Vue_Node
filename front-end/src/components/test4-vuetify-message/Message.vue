<template>
    <v-app>
        <v-card>
            <v-card-text>
                <v-btn
                        block
                        color="primary"
                        dark
                        @click="snackbar = true"
                >
                    Show Snackbar
                </v-btn>
            </v-card-text>

            <v-snackbar
                    v-model="snackbar"
                    :bottom="y === 'bottom'"
                    :color="color"
                    :left="x === 'left'"
                    :multi-line="mode === 'multi-line'"
                    :right="x === 'right'"
                    :timeout="timeout"
                    :top="y === 'top'"
                    :vertical="mode === 'vertical'"
            >
                {{ text }}
                <v-btn
                        dark
                        text
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
        </v-card>
    </v-app>
</template>
<script>
    export default {
        data () {
            return {
                color: 'success',
                mode: '',
                snackbar: false,
                text: 'Hello, I\'m a snackbar',
                timeout: 6000,
                x: 'right',
                y: 'bottom',
            }
        },
    }
</script>