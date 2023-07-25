import create from 'zustand'

const updateComponent = (components: any[], id: string, data: any) =>
  components.map(component => (component.id === id ? { ...component, ...data } : component))

type Website = {
  website: any
  components: any[]
  mobilePreviewComponents: any[]
  setWebsite: (website: any) => void
  setComponents: (components: any) => void
  setMobilePreviewComponents: (components: any) => void
  updateComponent: (id: string, data: any) => void
}

const useWebsite = create<Website>(
  (set): Website => ({
    website: undefined,
    components: [],
    mobilePreviewComponents: [],
    setWebsite: (website: any) => set(state => ({ ...state, website })),
    setComponents: (components: any) => set(state => ({ ...state, components })),
    setMobilePreviewComponents: (mobilePreviewComponents: any) => set(state => ({ ...state, mobilePreviewComponents })),
    updateComponent: (id: string, data: any) =>
      set(state => ({ ...state, components: updateComponent(state.components, id, data) })),
  }),
)

export default useWebsite
