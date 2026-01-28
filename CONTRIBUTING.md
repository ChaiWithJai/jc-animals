# Contributing to Animals of JC Heights

Thank you for your interest in contributing! This is a community project maintained by volunteers. Whether you're a coder, wildlife enthusiast, or just spotted an error — your help is welcome.

> **Note**: This guide is inspired by [Ghostty's excellent CONTRIBUTING.md](https://github.com/ghostty-org/ghostty/blob/main/CONTRIBUTING.md).

## Quick Guide

### I want to add or fix species data
Edit `data/species.json` directly and open a PR. No coding needed — it's just JSON. See [Data Contribution Guide](#adding-species-data) below.

### I found an error or inaccuracy
Open an [Issue](https://github.com/chaiwithjai/jc-animals/issues) with:
- Which species/section has the error
- What's wrong
- What the correct information should be
- Source (if you have one)

### I want to suggest a feature
Open a [Discussion](https://github.com/chaiwithjai/jc-animals/discussions) first. Once we agree on scope, it becomes an actionable Issue.

### I've implemented something
1. If there's an Issue for it → open a PR
2. If there's no Issue → open a Discussion first
3. PRs without prior discussion may be closed

### I have a question
Join our [Facebook Community](https://www.facebook.com/groups/1391458226058501) or open a Discussion.

---

## Adding Species Data

Species data lives in `data/species.json`. To add a new animal:

```json
{
  "id": "SP-XXX",
  "common_name": "Animal Name",
  "scientific_name": "Genus species",
  "status": "stable",
  "description": "1-2 sentences about the animal.",
  "fun_fact": "Something interesting!",
  "habitat": ["parks", "residential_areas"],
  "diet": ["insects", "seeds"],
  "activity": "diurnal",
  "image": "https://images.pexels.com/photos/XXXXXX/..."
}
```

**Status options**: `stable`, `abundant`, `endangered`, `special_concern`, `invasive`, `expanding`, `domestic`, `managed`

**Activity options**: `diurnal` (day), `nocturnal` (night), `crepuscular` (dawn/dusk)

### Image Requirements
- Use Pexels, Unsplash, or other CC0/royalty-free sources
- Include `?auto=compress&cs=tinysrgb&w=800` for Pexels URLs
- No copyrighted images

---

## AI-Generated Content

Much of the species data was initially generated using Claude Opus 4.5. We're transparent about this.

**If you spot AI errors:**
1. Open an Issue tagged `ai-accuracy`
2. Provide the correct information with sources
3. We'll update the data and credit you

---

## Code Contributions

### Setup
```bash
git clone https://github.com/chaiwithjai/jc-animals.git
cd jc-animals
npx serve .
```

### Style Guide
- Vanilla HTML/CSS/JS only (no frameworks)
- Mobile-first responsive design
- Accessible (WCAG 2.1 AA target)
- All interactive elements need unique IDs for testing

### Before Submitting
- [ ] Test on mobile (375px viewport)
- [ ] Run Lighthouse audit (aim for 90+ accessibility)
- [ ] Verify all images load
- [ ] Update `data/*.json` if you changed species/quiz/agency info

---

## Monthly Contributor Meetup

First Saturday of each month. Join to:
- Learn to contribute
- Suggest features in person
- Get help with PRs

Details in the [Facebook group](https://www.facebook.com/groups/1391458226058501).

---

## Code of Conduct

Be kind. Be respectful. We're all here because we love wildlife and our community.

---

*Thank you for helping make this resource better for Jersey City Heights!* 🦊
