import {createRemoteComponent} from '@remote-ui/core';

export interface SegmentationTemplateProps {
    localizedTitle: string;
	localizedDescription: string;
	polarisIcon: 'AbandonedCartMajor' | 'CartMajor'
    // List of tokens for syntax highlighting. Token = text + type
	tokens: any[] 
    // QL code to inject (might differ from tokens text)
    qlQuery: string 	
    // List of metafields that need to be created if they don’t exist (type, namespace, key, etc.)
	metafieldDependencies: any[]
	// List if standard metafield definitions to enable (ID)
    standardMetafieldDependencies: number[]

}

export const SegmentationTemplate = createRemoteComponent<'SegmentationTemplate', SegmentationTemplateProps>('SegmentationTemplate');
