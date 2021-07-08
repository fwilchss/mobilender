import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('componente Home.vue', () => {
    it('Revisamos que exista componente', () => {
        const wrapper = shallowMount(Home);

        //Revisamos nombre de la función
        expect(wrapper.name)
    })
})
