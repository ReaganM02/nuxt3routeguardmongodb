<script setup>
defineProps( {
    modelValue: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String,
    label: {
        type: String,
        required: true
    },
    required: {
        type: Boolean,
        default: false
    }
} )
defineEmits( [ 'update:modelValue' ] )
</script>
<template>
    <div>
        <label class="text-xs text-slate-600">
            {{ label }}
            <span
                v-if="required"
                class="required"
            >(required)</span>
        </label>
        <input
            :type="type"
            :placeholder="placeholder"
            class="mt-1 outline outline-1 outline-slate-400 px-3 py-3 rounded text-xs w-full block focus:outline-teal-400"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>
<style scoped>
.required {
    font-size: 9px;
    position: relative;
    top: -5px;
    opacity: 0.5;
}
</style>