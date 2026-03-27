# Media Folder Structure

Store all your portfolio media here:

## 📸 `/images` - Profile & Project Images
- **profile.jpg** - Your profile picture (update the path in About.tsx when ready)
  - Recommended: Square format (1:1 aspect ratio)
  - Size: 500x500px or larger
  - Format: JPG, PNG, or WebP

- Other project showcase images

## 🎥 `/videos` - Project Videos
- Store project demo videos here
- Reference them in the ProjectsPage component

---

## To Add Your Profile Picture:

1. Place your image in `/media/images/` as `profile.jpg`
2. Update the About.tsx file:
   - Replace the picture placeholder with:
   ```jsx
   <img src="/media/images/profile.jpg" alt="Your Name" />
   ```

## To Update Your Contact Links:

In `src/components/About.tsx`, update the `socialLinks` array:

```javascript
const socialLinks = [
  { icon: FaLinkedin, url: 'https://linkedin.com/in/YOUR-USERNAME', label: 'LinkedIn' },
  { icon: FaInstagram, url: 'https://instagram.com/YOUR-USERNAME', label: 'Instagram' },
  { icon: FaGithub, url: 'https://github.com/YOUR-USERNAME', label: 'GitHub' },
];
```

## To Update Your Name & Role:

In `src/components/About.tsx`, find these lines and update:

```javascript
<h3 className="profile-name">Your Name</h3>
<p className="profile-role">Analytics Engineer</p>
```

**Role:** "Analytics Engineer" combines:
- 📊 Data Analyst
- ⚙️ Data Engineer  
- 📈 BI Specialist

---

**Ready to share your media whenever you are!** 🚀
