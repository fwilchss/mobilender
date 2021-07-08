import { shallowMount } from '@vue/test-utils'
import Breadcrumbs from '@/components/Static/Breadcrumbs.vue'

describe('componente Breadcrumbs.vue', () => {
    it('Revisamos que exista componente', () => {
        const wrapper = shallowMount(Breadcrumbs);

        //Revisamos nombre de la función
        expect(wrapper.name)
    })
})
