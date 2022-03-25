<template>
    <div id="section-2">
        <h2>{{ msg2 }}</h2>

        <div class="container">
            <div class="row">
                <div class="col">
                    <ul>
                        <li><h3>This is the Education Component</h3></li></br>
                        <li><h4>Elementary:Dr. Clemente N. Dayrit Elementary School</h4></li></br>
                        <li><h4>Junior High School: Holy Angel University</h4></li></br>
                        <li><h4>Senior High School: Holy Angel University</h4></li></br>
                        <li><h4>College: Holy Angel University</h4></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'section-2',
    data () {
        return {
            msg2: ''
        }
    }
}
</script>