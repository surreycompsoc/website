<template>
  <footer>
    <div class="content">
      <div class="content-column">
        <h4>CompSoc</h4>
        <p class="secondary">University of Surrey</p>
        <p><a href="mailto:ussu.computing@surrey.ac.uk">ussu.computing@surrey.ac.uk</a></p>
        <div class="spacer" />
        <div class="brands">
<!--          <a href="https://www.bcs.org/membership-and-registrations/member-communities/student-chapters/" target="_blank">-->
<!--            <img alt="British Computer Society" src="~/assets/images/bcs-logo.png">-->
<!--          </a>-->
          <a href="https://ussu.co.uk/" target="_blank">
            <img alt="University of Surrey Students' Union" src="~/assets/images/ussu-logo.png">
          </a>
          <a href="https://www.huzzle.app/societies/compsoc" target="_blank">
            <img alt="Huzzle" src="~/assets/images/huzzle-logo.png">
          </a>
        </div>
      </div>
      <div class="content-column right">
        <p class="text-bold">Follow us on social media!</p>
        <p class="links">
          <a href="https://www.facebook.com/ComputingSoc" target="_blank"><i class="im im-facebook" /></a>
          <a href="https://instagram.com/surreycompsoc" target="_blank"><i class="im im-instagram" /></a>
          <a href="https://github.com/surreycompsoc" target="_blank"><i class="im im-github" /></a>
        </p>
        <div class="vspace" />
        <p class="text-bold">Spotted a typo?</p>
        <p>We're <a href="https://github.com/surreycompsoc/website" target="_blank">on GitHub</a>!</p>
        <p class="text-bold" style="margin-top: 0.5rem">Found a major issue?</p>
        <p>Contact the WebMaster</p>
        <a href="https://www.aranjannson.com/">aranjannson.com</a>
      </div>
    </div>
    <div class="copyright">
      <p>Handcrafted by the CompSoc Webmaster<br><small>Copyright &copy; 2023 - {{year}} Surrey CompSoc</small></p>
    </div>
  </footer>
</template>

<style lang="scss">
footer {

  margin-top: 80px;
  display: block;
  background: #F9FAFB;
  width: 100%;

  .content {
    display: flex;
    justify-content: space-between;
    min-height: 280px;

    .content-column { @apply flex flex-col text-center; }

    padding: 40px 20px;

    @apply flex-col;
    gap: 30px;

    @media (min-width: 700px) {
      @apply flex-row;
      padding: 40px 60px;
      gap: 0;

      .content-column { @apply text-left; }
      .content-column.right { @apply text-right; }
    }

    h4 {
      margin: 0;
      font-weight: bold;
      @apply text-gray-800 text-xl;
    }
    p { margin: 0; }

    .secondary { @apply text-gray-500; }

    .brands {
      user-select: none !important;
      a {
        display: inline-block;

        img {
          display: inline-block;
          height: 50px;
        }
      }

      & > *:not(:first-child) {
        margin-left: 20px;
      }

      padding-bottom: 20px;
    }

    .links {
      user-select: none !important;
      margin-top: 10px;

      a {
        transition: color .2s ease-out;

        &:not(:first-of-type) {
          margin-left: 5px;
        }
      }

      a:hover {
        color: #5D7FC4;
      }
    }
  }

  .copyright {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    background: #F3F4F6;
    color: #1F2937;
    font-weight: bold;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    year() {
      return new Date().getUTCFullYear();
    }
  }
});
</script>
