import {
  Section,
  SectionTags,
  TeamMembersSectionMember,
  TeamMembersVariables,
  TeamMembersVariants,
} from 'src/_polly/components/src/sections'
import { v4 as uuid } from 'uuid'
import { getSectionVariants } from './get-variants'
const tags: Record<TeamMembersVariants, SectionTags[]> = {
  VARIANT_1: ['IMAGE'],
  VARIANT_2: ['IMAGE'],
  VARIANT_3: ['IMAGE', 'SLIDESHOW'],
  VARIANT_4: ['IMAGE'],
  VARIANT_5: ['IMAGE'],
  VARIANT_6: ['IMAGE'],
  VARIANT_7: ['IMAGE', 'ANIMATION'],
}
export function getTeamMembersVariants() {
  const variants = getSectionVariants('TEAM_MEMBERS')
  const sections: Section<TeamMembersVariants, TeamMembersVariables>[] = []

  variants.forEach(variant => {
    if (variant.id === 'VARIANT_1') {
      const data: Section<TeamMembersVariants, TeamMembersVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'TEAM_MEMBERS',
        updatedAt: '',
        tags: tags[variant.id as TeamMembersVariants],
        variables: [
          { id: uuid(), category: 'TEXT', data: 'Meet the Team', name: 'TITLE' },
          {
            id: '123',
            name: 'TEAM_MEMBERS',
            category: 'TEXT',
            data: [
              {
                id: '1',
                image:
                  'https://static.wixstatic.com/media/bc177aff88e04820a84c0f5dde2f6027.jpg/v1/fill/w_920,h_920,al_c,q_85,usm_0.66_1.00_0.01/Young%20Businessman.webp',
                name: 'Taylor Quill',
                subtitle: 'Position/Role',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, mole.',
              },
              {
                id: '2',
                image:
                  'https://static.wixstatic.com/media/2eca80590fba43cbbebc8202eb91a12d.jpg/v1/fill/w_920,h_920,al_c,q_85,usm_0.66_1.00_0.01/Male%20Portrait.webp',
                name: 'Kris Ward',
                subtitle: 'Position/Role',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, mole.',
              },
              {
                id: '3',
                image:
                  'https://static.wixstatic.com/media/11062b_bee520ef2f564ccba95330ccdbd6f250~mv2_d_2000_2000_s_2.jpg/v1/fill/w_920,h_920,al_c,q_85,usm_0.66_1.00_0.01/Happy%20Young%20Man.webp',
                name: 'Alex Smith',
                subtitle: 'Position/Role',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, mole.',
              },
            ] as TeamMembersSectionMember[],
          },
        ],
        variant: variant.id as TeamMembersVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    }
    else if (variant.id === 'VARIANT_6') {
      const data: Section<TeamMembersVariants, TeamMembersVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'TEAM_MEMBERS',
        updatedAt: '',
        tags: tags[variant.id as TeamMembersVariants],
        variables: [
          { id: uuid(), category: 'TEXT', data: 'Meet the Team', name: 'TITLE' },
          {
            id: '123',
            name: 'TEAM_MEMBERS',
            category: 'TEXT',
            data: [
              {
                id: '1',
                image:
                  'https://static.wixstatic.com/media/bc177aff88e04820a84c0f5dde2f6027.jpg/v1/fill/w_920,h_920,al_c,q_85,usm_0.66_1.00_0.01/Young%20Businessman.webp',
                name: 'Taylor Quill',
                subtitle: 'Position/Role',
                description: '#developer #designer',
              },
              {
                id: '2',
                image:
                  'https://static.wixstatic.com/media/2eca80590fba43cbbebc8202eb91a12d.jpg/v1/fill/w_920,h_920,al_c,q_85,usm_0.66_1.00_0.01/Male%20Portrait.webp',
                name: 'Kris Ward',
                subtitle: 'Position/Role',
                description: '#developer #expert',
              },
              {
                id: '3',
                image:
                  'https://static.wixstatic.com/media/11062b_bee520ef2f564ccba95330ccdbd6f250~mv2_d_2000_2000_s_2.jpg/v1/fill/w_920,h_920,al_c,q_85,usm_0.66_1.00_0.01/Happy%20Young%20Man.webp',
                name: 'Alex Smith',
                subtitle: 'Position/Role',
                description: '#developer #team_lead',
              },
            ] as TeamMembersSectionMember[],
          },
        ],
        variant: variant.id as TeamMembersVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    } else {
      const data: Section<TeamMembersVariants, TeamMembersVariables> = {
        id: variant.id,
        createdAt: '',
        isSection: true,
        type: 'TEAM_MEMBERS',
        updatedAt: '',
        tags: tags[variant.id as TeamMembersVariants],
        variables: [
          { id: uuid(), category: 'TEXT', data: 'Meet the Team', name: 'TITLE' },
          {
            id: '123',
            name: 'TEAM_MEMBERS',
            category: 'TEXT',
            data: [
              {
                id: '1',
                image:
                  'https://static.wixstatic.com/media/bc177aff88e04820a84c0f5dde2f6027.jpg/v1/fill/w_920,h_920,al_c,q_85,usm_0.66_1.00_0.01/Young%20Businessman.webp',
                name: 'Taylor Quill',
                subtitle: 'Position/Role',
              },
              {
                id: '2',
                image:
                  'https://static.wixstatic.com/media/2eca80590fba43cbbebc8202eb91a12d.jpg/v1/fill/w_920,h_920,al_c,q_85,usm_0.66_1.00_0.01/Male%20Portrait.webp',
                name: 'Kris Ward',
                subtitle: 'Position/Role',
              },
              {
                id: '3',
                image:
                  'https://static.wixstatic.com/media/11062b_bee520ef2f564ccba95330ccdbd6f250~mv2_d_2000_2000_s_2.jpg/v1/fill/w_920,h_920,al_c,q_85,usm_0.66_1.00_0.01/Happy%20Young%20Man.webp',
                name: 'Alex Smith',
                subtitle: 'Position/Role',
              },
            ] as TeamMembersSectionMember[],
          },
        ],
        variant: variant.id as TeamMembersVariants,
        styleName: variant.name,
        designedBy: 'Plly Staff',
      }
      sections.push(data)
    }
  })

  return sections
}
