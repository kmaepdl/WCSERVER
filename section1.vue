<template>
    <div id="section-1">
    <div class="alert alert-dark" role="alert">
        <h2>{{ msg1 }}</h2>
    </div>
        <ul>
            </br>
            <li><h3>This is the Profile Component</h3></li></br>
            <li><h4>Objective: A hardworking and dedicated individual looking for a position to gain practical experience. To utilize and maximize my potentials.</h4></li></br>
            <li><h4>Name: Kimberly Mae P. De Leon</h4></li></br>
            <li><h4>Course: Information Technology with Specialization in Web Development</h4></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'section-1',
    data () {
        return {
            msg1: ''
        }
    }
}
</script>