---
outline: deep
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/89562799?v=4',
    name: 'Austin',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/ColaWsl' },
      { icon: 'x', link: 'https://x.com/maybe029' },
      { icon: 'instagram', link: 'https://x.com/maybe029' },
    ]
  },{
    avatar: 'https://avatars.githubusercontent.com/u/92426127?v=4',
    name: 'Yuchen Zhang',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/dlct-wzx' },
      { icon: 'x', link: 'https://x.com/maybe029' },
      { icon: 'instagram', link: 'https://x.com/maybe029' },
    ]
  },{
    avatar: 'https://avatars.githubusercontent.com/u/80754785?v=4',
    name: 'Zexi Wang',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/dlct-wzx' },
      { icon: 'x', link: 'https://x.com/maybe029' },
      { icon: 'instagram', link: 'https://x.com/maybe029' },
    ]
  },{
    avatar: 'https://avatars.githubusercontent.com/u/35999877?v=4',
    name: 'ZhuTTTT',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/ZhuTTTT' },
      { icon: 'x', link: 'https://x.com/maybe029' },
      { icon: 'instagram', link: 'https://x.com/maybe029' },
    ]
  }
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
