<template>
    <div id="section-3">
        <h2>{{ msg3 }}</h2>

        <ul>
            <li><h3>This is the Skills Component</h3></li></br>
            <li><h4>HTML</h4></li>
            <li><h4>CSS</h4></li>
            <li><h4>JavaScript</h4></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'section-3',
    data () {
        return {
            msg3: ''
        }
    }
}
</script>