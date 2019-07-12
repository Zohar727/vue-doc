<template>
    <div 
    :class="[
    'kis-button',
    `kis-button-${type}`
    ]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'KisButton',
    props: {
        type: {
            type: String,
            default: 'primary'
        }
    }
}
</script>
<style>
.kis-button {
  display: inline-block;
  border-radius: 4px;
  height: 14px;
  line-height: 14px;
  color: #fff;
  padding: 10px 19px;
  cursor: pointer;
  white-space: nowrap;
  margin-right: 4px;
}
.kis-button-primary {
    background-color: #409eff;
    border-color: #409eff;
}
.kis-button-success {
    background-color: #67c23a;
    border-color: #67c23a;
}
.kis-button-danger {
    background-color: #f56c6c;
    border-color: #f56c6c;
}
.kis-button-warning {
    background-color: #e6a23c;
    border-color: #e6a23c;    
}
</style>

