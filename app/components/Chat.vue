<script setup>
const isOpen = ref(false);
const message = ref('');
const isSending = ref(false);
const messagesContainer = ref(null);

const messages = reactive([
    {
        me: false,
        message: "Greetings, I am Alvin’s AI Agent. All of the responses I provide are based solely on the details outlined in his resume, ensuring that every answer accurately reflects his professional background, skills, and experiences.",
        timestamp: new Date()
    }
]);

const toggleChat = () => {
    isOpen.value = !isOpen.value;
};

const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const scrollToBottom = async () => {
    await nextTick();
    if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
};

const config = useRuntimeConfig();
const sendMessage = async () => {
    if (!message.value.trim() || isSending.value) return;

    isSending.value = true;
    const userMessage = message.value;

    // Add user message to chat
    messages.push({
        me: true,
        message: userMessage,
        timestamp: new Date()
    });

    message.value = '';
    await scrollToBottom();

    // Prepare form data for API
    const formData = new FormData();
    formData.append("message", userMessage);

    try {
        const response = await fetch(config.public.n8nWebhookUrl, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            console.log("Send message failed", response.status);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Add bot response to chat
        messages.push({
            me: false,
            message: result[0].output,
            timestamp: new Date()
        });

        await scrollToBottom();

    } catch (error) {
        console.error("Error sending message", error);

        // Add error message to chat
        messages.push({
            me: false,
            message: "Sorry, I encountered an error. Please try again.",
            timestamp: new Date()
        });

        await scrollToBottom();
    } finally {
        isSending.value = false;
    }
};

const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
};
</script>

<template>
    <div class="fixed bottom-6 right-6 z-50">
        <!-- Chat Toggle Button -->
        <button @click="toggleChat"
            class="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110">
            <svg v-if="!isOpen" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clip-rule="evenodd"></path>
            </svg>
            <svg v-else class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>

        <!-- Chat Container -->
        <transition enter-active-class="transition-all duration-300" leave-active-class="transition-all duration-300"
            enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100"
            leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
            <div v-show="isOpen"
                class="absolute bottom-20 right-0 w-96 h-[30rem] bg-white rounded-lg shadow-2xl transform origin-bottom-right">
                <!-- Header -->
                <div class="bg-blue-600 text-white p-4 flex items-center rounded-t-lg">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <h1 class="text-lg font-semibold">AI Assistant</h1>
                        <p class="text-blue-200 text-xs">{{ isSending ? 'Typing...' : 'Online' }}</p>
                    </div>
                </div>

                <!-- Messages Container -->
                <div ref="messagesContainer" class="flex-1 p-3 overflow-y-auto space-y-3 h-88">
                    <div v-for="(msg, index) in messages" :key="index"
                        :class="msg.me ? 'flex items-start space-x-2 justify-end' : 'flex items-start space-x-2'">
                        <!-- User Message -->
                        <template v-if="msg.me">
                            <div class="bg-blue-600 text-white rounded-lg p-2 max-w-xs">
                                <p class="text-sm">{{ msg.message }}</p>
                                <span class="text-xs text-blue-200 mt-1 block">{{ formatTime(msg.timestamp) }}</span>
                            </div>
                            <div
                                class="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </template>

                        <!-- Bot Message -->
                        <template v-else>
                            <div
                                class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div class="bg-gray-100 rounded-lg p-2 max-w-xs">
                                <p class="text-gray-800 text-sm">{{ msg.message }}</p>
                                <span class="text-xs text-gray-500 mt-1 block">{{ formatTime(msg.timestamp) }}</span>
                            </div>
                        </template>
                    </div>

                    <!-- Loading indicator -->
                    <div v-if="isSending" class="flex items-start space-x-2">
                        <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-white animate-spin" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm1 14V5h10v11H5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="bg-gray-100 rounded-lg p-2">
                            <div class="flex space-x-1">
                                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style="animation-delay: 0.1s;"></div>
                                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style="animation-delay: 0.2s;"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Input Area -->
                <div class="border-t bg-gray-50 p-3 rounded-b-lg">
                    <div class="flex space-x-2">
                        <input v-model="message" @keypress="handleKeyPress" :disabled="isSending" type="text"
                            placeholder="Type your message..."
                            class="flex-1 border border-gray-300 text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed" />
                        <button @click="sendMessage" :disabled="isSending || !message.trim()"
                            class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors duration-200 flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed">
                            <svg v-if="!isSending" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                                </path>
                            </svg>
                            <svg v-else class="w-4 h-4 animate-spin" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm1 14V5h10v11H5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>