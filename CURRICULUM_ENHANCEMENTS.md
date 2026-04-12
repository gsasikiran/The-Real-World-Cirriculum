# Life Literacy Project - Curriculum Enhancements

## Overview
All 10 life literacy topics have been comprehensively enhanced with a structured curriculum progression from Basics → Intermediate → Advanced levels. Each level now includes:

- **Detailed Introduction** explaining the level's focus
- **Comprehensive Modules** with step-by-step practical bullets
- **Real-world Examples** and everyday scenarios
- **Clear Learning Goals** for each level
- **Expanded Terminology** definitions specific to each level
- **Common Questions & Answers** addressing learner concerns
- **Practical First Actions** to start immediately
- **Recovery Guidance** for when things go wrong

---

## Detailed Topics

### 1. **Personal Finance** (Basics → Intermediate → Advanced)
**Progression:**
- **Basics**: Money tracking, emergency funds, understanding ETFs basics
- **Intermediate**: Asset allocation, expense ratios, rebalancing discipline
- **Advanced**: ETF mastery including who uses them and why, policy-based investing, tax optimization, behavioral risk management

**Key Enhancement - Advanced Level:**
- Detailed explanation of ETF mechanics and why professionals prefer them
- Who uses ETFs (individuals, institutions, portfolio managers) and concrete reasons
- ETF vs mutual fund comparison with cost and tax implications
- Investment Policy Statement (IPS) design and execution
- Scenario planning for market crashes and volatility management

**Real-world Focus:** Explains actual trading practices, cost comparison, tax implications

---

### 2. **Law for Daily Life** (Basics → Intermediate → Advanced)
**Progression:**
- **Basics**: Documentation, consumer rights, reading contracts
- **Intermediate**: Formal complaint escalation, contract negotiation, everyday scenarios (rentals, employment, credit)
- **Advanced**: Contract drafting strategies, legal precedent research, complex disputes (employment law, housing rights, financial regulations)

**Real-world Scenarios Included:**
- Defective products and refund procedures
- Rental deposits and return procedures
- Unauthorized charges on cards
- Employment contract terms
- Loan and credit disputes
- Insurance claim denials

**Learner Guidance:** Step-by-step complaint procedures, escalation pathways (direct → ombudsman → court)

---

### 3. **Personal Safety and Self-Defence** (Basics → Intermediate → Advanced)
**Progression:**
- **Basics**: Daily awareness habits, emergency communication networks, verbal boundary-setting
- **Intermediate**: Route mapping and security, scenario drills, physical boundary techniques
- **Advanced**: Comprehensive security protocols, leading family drills, layered defense systems

**Focus:** Prevention and awareness first, de-escalation second, physical response last

---

### 4. **Health and First Aid** (Basics → Intermediate → Advanced)
**Progression:**
- **Basics**: First aid kit assembly, emergency response basics, daily wellness foundations
- **Intermediate**: Certified first aid techniques, family medical information systems, preventive health routines
- **Advanced**: Comprehensive health planning, family drills, relapse prevention for chronic conditions

**Practical Skills Emphasized:** CPR, recovery position, scene safety assessment

---

### 5. **Communication and Negotiation** (Basics → Intermediate → Advanced)
**Progression:**
- **Basics**: Fact-Impact-Request framework, active listening, boundary scripts
- **Intermediate**: Salary negotiations, handling objections, documenting agreements
- **Advanced**: Multi-stakeholder negotiations, coaching others, principled negotiation principles

**Methods Taught:** Non-violent communication, BATNA (Best Alternative To Negotiated Agreement), anchoring techniques

---

### 6. **Career and Work Literacy** (Basics → Intermediate → Advanced)
**Progression:**
- **Basics**: Resume optimization with quantified outcomes, offer basics, simple networking
- **Intermediate**: Interview preparation (STAR method stories), compensation negotiation, 
- **Advanced**: Long-term career strategy, personal brand building, industry visibility

**Real-world Focus:** Total compensation analysis, employment terms, growth opportunities

---

### 7. **Digital Literacy and Cyber Safety** (Basics → Intermediate → Advanced)
**Progression:**
- **Basics**: Password manager setup, 2FA/MFA enabling, phishing identification, backup creation
- **Intermediate**: App permission audits, multi-backup recovery plans, device hardening
- **Advanced**: Encryption implementation, incident response procedures, forensics awareness

**Threats Covered:** Phishing, credential theft, malware, unauthorized access, data loss

---

### 8. **Home and Life Administration** (Basics → Intermediate → Advanced)
**Progression:**
- **Basics**: Bills dashboard, document organization, weekly routines
- **Intermediate**: Safe automation setup, family workflow systems, annual planning calendar
- **Advanced**: Comprehensive operations system, redundancy and contingency planning

**Systems Approach:** Repeatable, maintainable, documented procedures for household operations

---

### 9. **Cooking and Eating** (Basics → Intermediate → Advanced)
**Progression:**
- **Basics**: Kitchen safety, 5 repeatable meals, plate balance and nutrition basics
- **Intermediate**: Weekly meal planning by budget, batch cooking, ingredient quality assessment
- **Advanced**: Nutrition optimization for specific goals, cooking for multiple dietary needs

**Curriculum Focus:** Safe techniques → foundation meals → strategic planning → customization

---

### 10. **Calling and Handling Emergency Situations** (Basics → Intermediate → Advanced)
**Progression:**
- **Basics**: Emergency call scripts, scene safety assessment, basic support until help arrives
- **Intermediate**: Step-by-step calling procedures, bystander coordination, change monitoring
- **Advanced**: Household emergency drills, action plan design, complex response coordination

**Priority Order:** Safety → Clear communication → Effective support

---

## Implementation Structure

### Changes Made to `topic.js`:

1. **New Content Objects** (9 additions):
   - `LAW_LEVEL_CONTENT`
   - `SAFETY_LEVEL_CONTENT`
   - `HEALTH_LEVEL_CONTENT`
   - `COMMUNICATION_LEVEL_CONTENT`
   - `CAREER_LEVEL_CONTENT`
   - `DIGITAL_LEVEL_CONTENT`
   - `HOME_ADMIN_LEVEL_CONTENT`
   - `COOKING_LEVEL_CONTENT`
   - `EMERGENCY_LEVEL_CONTENT`

2. **Enhanced `PERSONAL_FINANCE_LEVEL_CONTENT`**:
   - Advanced level now includes detailed ETF mechanics
   - Explains who uses ETFs and why (individuals, institutions, portfolio managers)
   - Includes Investment Policy Statement design
   - Added comprehensive questions about advanced scenarios

3. **Updated `getLevelData()` Function**:
   - Now routes all topics to their level-specific content
   - Maps each topic slug to its corresponding LEVEL_CONTENT object

### Content Structure (Each Level Includes):
```
{
  intro: "Level-specific introduction",
  modules: [
    {
      title: "Module name",
      bullets: ["actionable step 1", "actionable step 2", ...]
    }
  ],
  concepts: ["core concept 1", "core concept 2", ...],
  terminology: [
    { term: "Term", meaning: "Definition" }
  ],
  questions: [
    { q: "Common question?", a: "Practical answer" }
  ],
  findMore: ["Resource type and category"],
  whenThingsGoWrong: ["Recovery action 1", "Recovery action 2"],
  references: [
    { title: "Resource", url: "https://..." }
  ],
  quiz: [...] (inherited from topic defaults)
}
```

---

## Key Enhancements Summary

### ✅ Curriculum-Style Progression
Each topic flows logically: foundations → application → mastery

### ✅ Real-World Examples
- Law: Specific scenarios (rental disputes, defective products, employment)
- Finance: ETF trading mechanics and use cases
- Safety: Route planning and scenario drills
- Career: STAR interview stories, compensation packages

### ✅ Practical Guidance
- Step-by-step procedures for every level
- Recovery instructions ("When Things Go Wrong")
- Measurable milestones and first actions

### ✅ Depth and Nuance
- Beginner level establishes foundations
- Intermediate level teaches application
- Advanced level explores mastery and teaching others

### ✅ All Original Components Preserved
- Quizzes remain with all questions
- References are expanded
- First action and warnings are level-specific where applicable
- Modules are progressively more detailed

---

## Next Steps (Optional Enhancements)

1. **Add Video Links** - Embed YouTube tutorials for each module
2. **Create Worksheets** - Downloadable templates (resume, budget, contracts)
3. **Add Tracking** - Let users mark completion and progress through levels
4. **Community Features** - Share examples and success stories by level
5. **Personalization** - Let users select their pace (self-paced vs. structured)

---

## Testing Recommendations

1. Navigate to each topic and toggle through Basics → Intermediate → Advanced
2. Verify content loads completely on each level
3. Check that quiz questions display properly
4. Verify all links in references work
5. Test on mobile devices for readability

---

**Version:** 1.0  
**Last Updated:** 2026-04-12  
**Status:** Complete and Ready for Testing
