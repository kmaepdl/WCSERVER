<template>
  <div class="contact">

    <div class="container">
  <div style="text-align:center">
    <h2>Contact Us</h2>
    <p>For more information, leave us a message:</p>
  </div>
  <div style="text-align:center" class="row">
    <div class="column">
      <form action="/action_page.php"> <br>
        <label for="fname">First Name</label><br>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."><br>
        <label for="lname">Last Name</label><br>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."><br>
        <label for="subject">Subject</label><br>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea><br>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      title: 'Contact'
    }
  }
}
</script>

<style scoped>
</style>